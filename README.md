# Authentication (Rejestracja użytkownika)
 a) Firebase
    - Korzystam z Firebase Authentication, czyli usługi Firebase do rejestracji, logowania, resetu hasła itd.
    
- Stworzenie pliku .env.local aby mieć IP i inne dane tylko lokalnie w przypadku wrzucenia aplikacji na github
    - stworzenie firebase.js pobranie z firebase

    ``import { initializeApp } from "firebase/app";``
    ``import { getAuth } from "firebase/auth";``

    - następnie stworzenie zmiennej firebaseConfig
    - import.meta.env - to specjalny obiet w Vite (czyli bundlerze), który pozwala na dostęp do zmiennych środowiskowych (.env.local)

    przykład: 
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 

    to mówi: Pobierz wartość z import.meta.env.VITE_FIREBASE_API_KEY, czyli Vite podkłada to co mam w .env.local

    To działa podczas uruchomienia aplikacji (npm run dev) Vite automatycznie wczytuje pliki .env.local i zamienia import.meta.env na odpowiednie wartości

    W przeglądarce nie widać tych zmiennych jako import.meta.env bo one są zastąpione na sztywno podczas bundlowania

    -const auth = getAuth(app); eksportuje auth czyli instalacje autoryzacji żeby móc z niej korzyustać w innych plikach (na przykład w AuthContext), dzięki getAuth mogę zrobić takie rzeczy jak: 
    - `signInWithEmailAndPassword(auth, email, password)`
    - `createUserWithEmailAndPassword(auth, email, password)`
    - `signOut(auth)`

b) stworzenie komponentu [Signup.jsx] 

    - importowanie useRef

useRef nie powoduje ponownego renderowania komponentu, gdy zmieniamy jego wartość. useRef służy do przechowywania wartości, które nie wpływają na interfejs użytkownika i nie wywołują ponownego renderowania. useRef jest alternatywą dla useState przydaje się właśnie w formularzach 

`const emailRef = useRef()`
`const passwordRef = useRef()`
`const passwordConfirmRef = useRef()`

Dzięki ref={emailRef} mogę potem pobrać wartość wpisaną przez użytkownika:

    - importowanie useState

`const [error, setError] = useState('')`
`const [loading, setLoading] = useState(false)`

error – przechowuje treść błędu "Passwords do not match".
loading – informacja, czy właśnie trwa operacja (np. rejestracja).
setLoading(true) // ustawiamy, że trwa ładowanie
setError('Passwords do not match') // pokazujemy błąd

    - importowanie useNavigate - przekierowanie po udanej rejestracji
    
`const navigate = useNavigate()`

To funkcja z react-router-dom.
Przekierowuje użytkownika do innej strony.

navigate('/') // przekierowanie na stronę główną po rejestracji (w tym przypadku dashboard, dzięki PrivateRoute nie da się tam wejść bez logowania/rejestracji ale o tym później)

    - async function handleSubmit(e) – obsługa formularza rejestracji

async function handleSubmit(e) {
  e.preventDefault()
}   

async oznacza, że funkcja działa asynchronicznie – możesz w niej używać await, czyli poczekać na zakończenie operacji, np. zapisu w Firebase.
e.preventDefault() blokuje domyślne wysyłanie formularza (żeby nie przeładował strony).

    - Walidacja haseł 

if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  return setError('Password do not match')
}

Sprawdza, czy oba hasła są takie same.
Jeśli nie → ustawia błąd i przerywa działanie funkcji.

    Rejestracja użytkownika

`await signup(emailRef.current.value, passwordRef.current.value) navigate('/')`
Wywołuje funkcję signup z AuthContext (która korzysta z Firebase).

Po udanym utworzeniu konta → przekierowuje na /. (czyli do dashboardu)

signup pochodzi z AuthContext 
`const { signup } = useAuth()`

    Przyciski i inputy
Inputy mają ref (czyli odwołanie do konkretnego pola, dzięki czemu można pobrać wartość).

Przycisk ma disabled={loading} – nie da się go kliknąć, jeśli loading = true.

emailRef.current  // cały element <input>
emailRef.current.value  // wartość wpisana w input (czyli np. "jan@wp.pl")

    Dlaczego używamy useRef zamiast useState? 

useRef nie powoduje ponownego renderowania komponentu, więc jest bardziej wydajny w prostych przypadkach (np. formularz).

Idealny, jeśli tylko chcesz sięgnąć do aktualnej wartości inputa w momencie wysyłania formularza.



START
  │
  ├── Kliknięcie "Sign up"
  │       ↓
  ├── e.preventDefault()
  │       ↓
  ├── Czy hasła są równe?
  │       ├── NIE → Wyświetl błąd i STOP
  │       └── TAK
  │            ↓
  ├── setLoading(true)
  │       ↓
  ├── signup(email, password)
  │       ├── SUKCES → navigate('/')
  │       └── BŁĄD → setError(error.message)
  │
  └── setLoading(false)
        ↓
      KONIEC

