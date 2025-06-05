const exerciseData = [
	{
		category: 'Squat',
		weaknesses: [
			{
				label: 'Sticking point na dole',
				value: 'squat_bottom',
				types: {
					wariacja: [
						'Paused Low Bar Squat',
						'Paused High Bar Squat',
						'ATG High Bar Squat',
						'Low Pinn Low Bar Squat',
						'Low Pinn High Bar Squat',
						'Anderson bottom Squat',
					],
					akcesoryjne: [
            			'Belt Squat', 
            			'FFE Bulgarian Split Squat', 
            			'Cyclist Split Squat',
						'Dumbbell Bulgarian Split Squat',
						'Barbell Bulgarian Split Squat',
          			],
					izolowane: [
						'Sisy Squat',
						'poliquin step up',
						'reverse nordic curl',
						'machine leg extensions',
						'Machine Leg Press',
						'single leg cyclist squat',
						'Single Leg Leg Press',
					],
					stablizacyjne: [
            			'Reverse Split squat + rotation',
						'Floating Split Squat',
            			'test2', 
            			'test3', 
            			'test3'
          			],
				},
			},
			{
				label: 'Sticking point na górze',
				value: 'squat_upper',
				types: {
					wariacja: [
             			'High Pinn Low Bar Squat',
						'High Pinn High Bar Squat',
						'High Pinn High Bar Squat',
             			'Front Squat', 
             			'Zercher Squat',
						'Anderson Squat',
					],
					akcesoryjne: [
						'Dumbbell Bulgarian Split Squat',
						'Barbell Bulgarian Split Squat',
						'test3', 
						'test3'
					],
					izolowane: [
						'test1', 
						'test2', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
            			'Reverse Split squat + rotation',
						'Floating Split Squat', 
            			'test2', 
            			'test3', 
            			'test3'
          			],
				},
			},
			{
				label: 'But Wink',
				value: 'core',
				types: {
					wariacja: [
						'Paused Low Bar Squat',
						'Paused High Bar Squat',
						'Paused ATG High Bar Squat',
						'Paused Low Pinn Low Bar Squat',
						'Paused Low Pinn High Bar Squat',
						'Paused Anderson bottom Squat',
					],
					akcesoryjne: [
						'Dumbbell Bulgarian Split Squat',
						'Barbell Bulgarian Split Squat',
						'test3', 
						'test3'
					],
					izolowane: [
						'test1', 
						'test2', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
            			'Reverse Split squat + rotation',
						'Floating Split Squat', 
            			'test2', 
            			'test3', 
            			'test3'
          			],
				},
			},
			{
				label: 'Przysiad Dzień dobry',
				value: 'goodmorning',
				types: {
					wariacja: [
						'High Bar Squat',
						'High Bar Box Squat',
						'Front Squat', 
             			'Zercher Squat',
						'Anderson Squat',
						'Hatfield Squat',
					],
					akcesoryjne: [
						'Dumbbell Bulgarian Split Squat',
						'Barbell Bulgarian Split Squat',
						'test2', 
						'test3', 
						'test3'
					],
					izolowane: [
						'Single Leg Leg Press', 
						'test2', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
            			'Reverse Split squat + rotation',
						'Floating Split Squat', 
            			'test2', 
            			'test3', 
            			'test3'
          			],
				},
			},
			{
				label: 'Hip Shift',
				value: 'hip_shift',
				types: {
					wariacja: [
						'Tempo 3010 Low Bar Squat',
						'Tempo 3010 High Bar Squat',
						'Tempo 3010 ATG High Bar Squat',
						'Tempo 3010 Low Pinn Low Bar Squat',
						'Tempo 3010 Low Pinn High Bar Squat',
						'Tempo 3010 Anderson bottom Squat',
					],
					akcesoryjne: [
						'Dumbbell Bulgarian Split Squat',
						'Barbell Bulgarian Split Squat', 
						'test2', 
						'test3', 
						'test3'
					],
					izolowane: [
						'Single Leg Leg Press', 
						'test2', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
            			'Reverse Split squat + rotation',
						'Floating Split Squat', 
            			'test2', 
            			'test3', 
            			'test3'
          			],
				},
			},
			
		],
		
	},
	{
		category: 'Bench',
		weaknesses: [
			{
				label: 'Poprawne opuszczanie sztangi',
				value: 'correct_lowering',
				types: {
					wariacja: [
						'Tempo 3010 Bench Press',
						'Tempo 3010 Low Pinn Bench Press',
					],
					akcesoryjne: [
						'Tempo 3010 Halfkneeling landmine press', 
						'Tempo 3010 landmine press', 
						'Tempo 3010 Dumbell Bench Press', 
						'Tempo 3010 Incline Dumbell Bench Press', 
						'Tempo 3010 seated dumbbell sholder press',
						'Tempo 3010 Hook Lying Dumbbell Bench Press',
					],
					izolowane: [
						'Dumbell Around the world',
						'TRX Triceps Extension',
						'Push up',
					],
					stablizacyjne: [	
						'Halfkneeling kettelbell Press',
						'Tsunami Military Press', 
						'halfkneeling side kb press',
						'Kettelbell Windmill',
						'Lateral Landmine Press',
					],
				},
			},
			{
				label: 'Wypchnięcie sztangi z klatki',
				value: 'bench bottom',
				types: {
					wariacja: [
						'3sc Paused Bench Press',
						'3sc Paused Low Pinn Bench Press',
						'3sc Paused High Pinn Bench Press',
						'Dead Bench Press',
					],
					akcesoryjne: [
						'halfkneeling landmine press', 
						'Paused Incline Dumbell Bench Press',
						'Paused Dumbell Bench Press',
						'Seated dumbbell sholder press', 
						'3sc Paused Hook Lying Dumbbell Bench Press',
					],
					izolowane: [
						'Dumbell Around the world',
						'TRX Triceps Extension',
						'Push up',
						
					],
					stablizacyjne: [	
						'Halfkneeling kettelbell Press',
						'Tsunami Military Press', 
						'halfkneeling side kb press', 
						'Kettelbell Windmill',
						'Lateral Landmine Press',
						
					],
				},
			},
			{
				label: 'Dalszy ruch kilka cm nad klatką',
				value: 'above_bench',
				types: {
					wariacja: [
						'Spoto Bench Press',
						'3sc Paused Spoto Bench Press',
						'Pinn Bench Press',
						'Dead Bench Press',
					],
					akcesoryjne: [
						'halfkneeling landmine press', 
						'Incline Dumbell Bench Press',
						'Seated dumbbell sholder press', 
						'test3'
					],
					izolowane: [
						'Dumbell Around the world', 
						'TRX Triceps Extension',
						'Push up',
						'test2', 
						'test3', 
						'test3'
					],
					stablizacyjne: [	
						'Halfkneeling kettelbell Press',
						'halfkneeling side kb press', 
						'Kettelbell Windmill',
						'Lateral Landmine Press',
						'test2', 
						'test3', 
						'test3'
					],
				},
			},
			{
				label: 'Połowa zakresu ruchu',
				value: 'few_above_bench',
				types: {
					wariacja: [
						'Spoto Bench Press',
						'High Pinn Bench Press', 
						'Dead Bench Press',
						'Florr Bench Press'
					],
					akcesoryjne: [
						'Incline Close grip Bench Press',
						'halfkneeling landmine press', 
						'JM Press', 
						'Smith JM Press', 
						'Seated dumbbell sholder press', 
						'test3',
					],
					izolowane: [
						'curl barbell skull crushers',
						'dumbell skull crushers',
						'dead stop skull crusher',
						'tate press', 
						'TRX Triceps Extension',
						'Push up',
						'Cable Tate Press',
						'test3'
					],
					stablizacyjne: [	
						'Halfkneeling kettelbell Press',
						'halfkneeling side kb press',
						'Kettelbell Windmill',
						'Lateral Landmine Press',
						'test2',
						'test3', 
						'test3',
					],
				},
			},
			{
				label: 'Końcówka zakresu ruchu(lockout)',
				value: 'lockout_bench',
				types: {
					wariacja: [
						'Close Grip Bench Press', 
						'Close Grip Pinn Bench Press', 
						'Florr Bench Press'
					],
					akcesoryjne: [
						'Incline Close grip Bench Press',
						'halfkneeling landmine press', 
						'Seated dumbbell Sholder press', 
						
					],
					izolowane: [
						'skull crushers',
						'dumbell skull crushers',
						'dead stop skull crusher',
						'JM Press', 
						'Smith JM Press',
						'tate press', 
						'TRX Triceps Extension',
						'Push up',
						'Cable Tate Press',
							
					],
					stablizacyjne: [
						'Halfkneeling kettelbell Press',
						'halfkneeling side kb press',
						'Kettelbell Windmill',
						'Lateral Landmine Press',
							
					],
					},
				},
				{
					label: 'Utrzymanie Techniki na dużym ciężarze',
					value: 'maintaining_bench',
					types: {
						wariacja: [
							'Tempo 3010 Bench Press',
							'Tempo 3010 Low Pinn Bench Press',
						],
						akcesoryjne: [
							'test1', 
							'test2', 
							'test3', 
							'test3'
						],
						izolowane: [
							'Dumbell Around the world', 
							'TRX Triceps Extension',
							'Push up',
							'test2', 
							'test3', 
							'test3'
						],
						stablizacyjne: [
							'Halfkneeling kettelbell Press',
							'halfkneeling side kb press',
							'Kettelbell Windmill',
							'Lateral Landmine Press', 
							'test2', 
							'test3', 
							'test3'
					],
				},
			},
		],
	},
	{
		category: 'Deadlift',
		weaknesses: [
			{
				label: 'Oderwanie sztangi(ciąg sumo)',
				value: 'deadlift_start_sumo',

				types: {
					wariacja: [
						'Hover Sumo Deadlift', 
						'Snatch grip Deadlift',
						'Deficit Sumo Deadlift',
						'Box Sumo Deadlift'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Superman Landing', 
						'Dumbbell Cossack squat',
						'Kettelbell Cossack squat',
						'Hip Thrust',
						'Dumbbell Split Stance RDL',
						'Barbell Split Stance RDL',
						'Trap Bar Split Stance RDL',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl',
						'Single Leg Leg Press', 
						'Single leg seated machine leg curl', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
						'Reverse Split squat + rotation', 
						'Single leg RDL',
						'test3', 
						'test3'
					],
				},
			},
			{
				label: 'Oderwanie sztangi(ciąg klasyczny)',
				value: 'deadlift_start_classic',

				types: {
					wariacja: [
						'Hover Classic Deadlift', 
						'Snatch grip Deadlift',
						'Deficit Classic Deadlift',
						'Box Deadlift'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Superman Landing', 
						'Hip Thrust', 
						'Back Extension with plate',
						'Back Extension with barbell',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl',
						'Single Leg Leg Press',
						'Single leg seated machine leg curl', 
						'test3', 
						'test3'],
					stablizacyjne: [
						'Dumbbell Single leg RDL', 
						'Barbell Single leg RDL', 
						'test2', 
						'test3', 
						'test3'
					],
				},
			},
			{
				label: 'Lockout(ciąg sumo)',
				value: 'lockout_sumo',
				types: {
					wariacja: [
						'Snatch grip RDL', 
						'Sumo block pull',
						'Paused Sumo Deadlift above the knee'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Dumbbell Cossack squat',
						'Kettelbell Cossack squat',
						'Hip Thrust',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl', 
						'Single leg seated machine leg curl', 
						'test3', 
						'test3'],
					stablizacyjne: [
						'Reverse Split squat + rotation', 
						'Single leg RDL', 
						'test3', 
						'test3',
					],
				},
			},
			{
				label: 'Lockout(ciąg klasyczny)',
				value: 'lockout_classic',
				types: {
					wariacja: [
						'Block pull', 
						'Snatch grip RDL',
						'Paused Deadlift above the knee'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Hip Thrust', 
						'Back Extension with plate',
						'Back Extension with barbell',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl', 
						'Single leg seated machine leg curl', 
						'test3', 
						'test3',
					],
					stablizacyjne: [
						'Reverse Split squat + rotation', 
						'Single leg RDL', 
						'Hip Thrust', 
						'test3',
					],
				},
			},
			{
				label: 'Pod kolanem(ciąg sumo)',
				value: 'below_the_knee_sumo',
				types: {
					wariacja: [
						'Deadlfit sumo to the knee',
						'Paused Sumo Deadlift below the knee'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Dumbbell Cossack squat',
						'Kettelbell Cossack squat',
						'Hip Thrust',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl', 
						'Single leg seated machine leg curl', 
						'test3', 
						'test3'],
					stablizacyjne: [
						'Reverse Split squat + rotation', 
						'Single leg RDL', 
						'test3', 
						'test3'
					],
				},
			},
			{
				label: 'Pod kolanem(ciąg classic)',
				value: 'below_the_knee_classic',
				types: {
					wariacja: [
						'Deadlfit to the knee',
						'Paused Deadlift below the knee'
					],
					akcesoryjne: [
						'GHR',
						'Glute Bridge', 
						'Hip Thrust', 
						'Back Extension with plate',
						'Back Extension with barbell',
						'Power Shrugs',
					],
					izolowane: [
						'Swiss Ball Leg Curl',
						'Machine Leg Leg Curl', 
						'Single leg seated machine leg curl', 
						'test3', 
						'test3'
					],
					stablizacyjne: [
						'Single leg RDL', 
						'test3', 
						'test3'
					],
				},
			},
		],
	},
]

const independentExercises = {
  back: {
    backHorizontal: [
      'Barbell Rows',
      'Underhand grip Barbell Rows',
      'Pendley Rows',
	  'Barbell Seal Row',
	  'Dumbell Seal Row',
      'contralateral dumbell row',
      'single arm dumbell row',
      'chest supported dumbell row',
      'chest supported barbell row',
      'meadows Row',
      'seated calbe row',
      'dumbell pullover',
	  'Kettelbell Gorilla Row',
    ],
    backVertical: [
      'Pull-Ups',
      'Chin-ups',
      'Wide Grip Lat Pulldown',
      'Neutral grip Lat Pulldown',
      'Underhand grip Lat Pulldown',
      'Pull-up hammer grip',
	  'Eccentric pull up',
	  'Eccentric chin up',
	  'Eccentric pull up hammer grip',
	  'Chest supported Single Arm lat pulldown',
	  'Cobra pulldown',
	  'Scott pull',
    ],
    backIsolation: [
	  'Duffin up right row',
      'Chest supported No money',
      'prone Y rise',
      'Facepull rotation',
      'prone T rise',
      'cable reverse fly',
      'head supported row',
      'powell raises',
      'prone snow angels'
    ],
	backMix: [
		'Bird Dog Row',
		'Cable Row/w rotation',
		'Split Stance single arm lat pullover'
	]
  },
  
  core: {
    core: [
		'obligues dead bug',
		'dead bug psoas march',
		'copenhagen adduction',
		'panda roll',
		'Side Plank Clamshell',
		'Knee to the bars',
		'GHD sit up',
		'Halfkneeling wood choppers',
		'Stir The Pot',
		'Band Resiseted deadbug',
		'Band Resiseted Hollowbody',
		'Weighted Plank',
	]
  },

  glutes: {
	glutesGlobal: [
		'Hip Thrust',
		'Glute Bridge',
		'Snatch Grip RDL',
		'RDL',
		'Dumbbell RDL',
	],
	glutesIsolation: [
		'Glute Crushers',
		'Donkey Kick'
	]
  },
  foreArms: {
	biceps: [
		'Incline dumbbell Curl',
		'Bayesian Cable Curl',
		'One Arm Bayesian Cable Curl',
	],
	triceps: [
		'Cable Tate Press',
	]
  }
}


export default exerciseData
export {independentExercises}
