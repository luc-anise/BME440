export interface Case {
  name: string;
  details: string;
  givenInformation: string;
  vitals: CasePossibility[];
  controller: CasePossibility[];
  lvadTeam: CasePossibility[];
  //Labs: Labs; -- Not using this yet
  key: {
    keyOrdered: string[];
    keyUnordered: string[];
  };
}

export interface newCase {
  name: string;
  details: string;
  givenInformation: string;
  tree: CasePossibility[]; // --> [Vitals, Controller, LVADTeam, Labs]
}

export interface CasePossibility {
  id: string;
  details: string;
  feedback: string;
  checkedByUser?: boolean;
  requiredToCheck: boolean;
  criticalFailure: boolean;
  resolvesSimulation: boolean;
  pointValue?: number;
  subOptions?: CasePossibility[];
  reportFeedback?: string;
}

interface Vitals {
  //bloodPressure: BloodPressure;
  NIBPcuff: CasePossibility;
  doppler: CasePossibility;
  heartRate: CasePossibility;
  temperature: CasePossibility;
  pulseOximeter: CasePossibility;
  Respirations: CasePossibility;
}

export interface Controller {
  display: {
    parameters: CasePossibility;
    arrowCheck: CasePossibility;
  };
  listenForHum: CasePossibility;
  pump: {
    isOn: {
      haveLVADTeamReplaceController: CasePossibility;
      replaceControllerYourself: CasePossibility;
    };
    isOff: {
      haveLVADTeamReplaceController: CasePossibility;
      replaceControllerYourself: CasePossibility;
    };
  };
}
interface LVADTeam {
  callCoordinator: CasePossibility;
}
interface BloodPressure {
  NIBPcuff: CasePossibility;
  doppler: CasePossibility;
}

interface Labs {
  CBC: CasePossibility;
}

export let Case1: Case = {
  name: 'Case 1',
  details: 'SYSTEM CONTROLLER FAULT ALARM',
  givenInformation:
    'Case History: LVAD patient DH (58 YO male) was presented to the Emergency Department after he jumped in the pool to save his son who he thought was drowning',
  key: {
    keyOrdered: [
      'callLVADCoordinator',
      'parameters',
      'arrowCheck',
      'listenForHum',
      'pumpOnVADReplace',
     ],
    
     keyUnordered: [
      'NIBPCuff',
      'doppler',
      'heartRate',
      'temperature',
      'pulseOximeter',
      'respirations',
    ],
  },
    controller: [
    {
      details: 'Parameters',
      id: 'parameters',
      feedback: 'Normal Operations',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      reportFeedback: "Controller parameters are normal when checked.",
    },
    {
      id: 'arrowCheck',
      details: 'Arrow check',
      feedback: 'Arrows ON',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      reportFeedback: "Controller Arrows were on when checked.",
    },
    {
      id: 'listenForHum',
      details: 'Listen for hum',
      feedback: 'There is an audible hum',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      reportFeedback: "Audible Hum was detected when listened for.",
    },
    {
      id: 'pumpIsOn',
      details: 'Pump is on',
      feedback: '',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      subOptions: [
        {
          id: 'pumpOnVADReplace',
          details: 'Pump is on: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: false,
          resolvesSimulation: false,
          reportFeedback:"Excellent job! You did a thorough assessment of the pump function and determined that the safest action is to wait for the VAD team to replace the controller.",
        },
        {
          id: 'pumpOnYouReplace',
          details: 'Pump is on: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "RITICAL FAIL: NEVER replace the controller yourself, unless you have thoroughly determined that the pump is not operational and no blood is circulating. It is much safer to wait for the VAD team to replace the controller if the pump is functional.",
        },
      ],
    },
    {
      id: 'pumpIsOff',
      details: 'Pump is off',
      feedback: '',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      subOptions: [
        {
          id: 'pumpOffVADReplace',
          details: 'Pump is off: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "CRITICAL FAIL: You incorrectly decided that the pump was off. It is important to thoroughly check all available information before coming to a decision about pump status. Additionally, if the pump truly was off, you need to replace the controller immediately.",
        },
        {
          id: 'pumpOffYouReplace',
          details: 'Pump is off: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "CRITICAL FAIL: You incorrectly decided that the pump was off. It is important to thoroughly check all available information before coming to a decision about pump status. However, if the pump was truly off, you correctly determined that you need to replace the controller immediately.",
        },
      ],
    },
  ],

  vitals: [
    {
      id: 'NIBPCuff',
      details: 'NIBP cuff',
      feedback: 'Bad reading',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
      reportFeedback: "Good job - it is best to attempt a blood pressure reading with an NIBP cuff first, and move to doppler if a reading cannot be obtained.",
    },
    {
      id: 'doppler',
      details: 'Doppler',
      feedback: 'Blood pressure within normal range',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    {
      details: 'Heart Rate',
      id: 'heartRate',
      feedback: 'there is no measurable heart rate',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    {
      id: 'temperature',
      details: 'Temperature',
      feedback: 'temperature is within normal range',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    {
      id: 'pulseOximeter',
      details: 'Pulse Oximeter',
      feedback: 'O2 is within normal range',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    {
      id: 'respirations',
      details: 'Respirations',
      feedback: 'Respiration rate is within normal range',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
  ],

  lvadTeam: [
    {
      id: 'callLVADCoordinator',
      details: 'Call the LVAD Coordinator',
      feedback: 'VAD Team has been called',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
      reportFeedback: "VAD coordinator team was called ASAP - This should always be the first step regardless of the case.",
    },
  ],
};

export let Case2: Case = {
  name: 'Case 2',
  details: 'SYSTEM CONTROLLER FAULT ALARM',
  givenInformation:
    'Case History: Patient is a 74 YO M with a PMH of Class IV CHF (with LVAD implantation two years ago). Patient presented to the ED following his husband noticing that the patient was slurring their speech and their face looked "funny" on the left side. EMS reported left sided pronator defit and decreased awareness (AOx2). Patient vitals from EMS reported HLD and HTN (160/83). Patient medication list includes sacubitril, valsartan, atorvastatin, metoprolol, furosemide, sprionolactone, aspirin, and warfarin. ',
    key: {
      keyOrdered: [
        'callLVADCoordinator',
        'parameters',
        'arrowCheck',
        'listenForHum',
        'pumpOnVADReplace',
       ],
       
       keyUnordered: [
        'NIBPCuff',
        'doppler',
        'heartRate',
        'temperature',
        'pulseOximeter',
        'respirations',
      ],
    },
    controller: [
    {
      details: 'Parameters',
      id: 'parameters',
      feedback:
        'LVAD parameters showed low PI, elevated power, low flow, and normal speed.',
      requiredToCheck: false,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
      reportFeedback: "Controller parameters were normal when checked.",
    },
    {
      id: 'arrowCheck',
      details: 'Arrow check',
      feedback: 'Arrows ON',
      requiredToCheck: false,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
      reportFeedback: "Controller arrows were on when checked.",
    },
    {
      id: 'listenForHum',
      details: 'Listen for hum',
      feedback: 'There is an audible hum',
      requiredToCheck: false,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
      reportFeedback: "Audible hum from device was detected.",
    },
    {
      id: 'pumpIsOn',
      details: 'Pump is on',
      feedback: '',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      subOptions: [
        {
          id: 'pumpOnVADReplace',
          details: 'Pump is on: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: false,
          pointValue: 1,
          resolvesSimulation: false,
          reportFeedback: "Good job - You were correct in determining that the pump is functional, but your assessment needs to be more thorough. You left out one or more important factors that could have changed your decision. You correctly determined that the safest action is to wait for the VAD team to replace the controller.",
        },
        {
          id: 'pumpOnYouReplace',
          details: 'Pump is on: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "CRITICAL FAIL: NEVER replace the controller yourself, unless you have thoroughly determined that the pump is not operational and no blood is circulating. It is much safer to wait for the VAD team to replace the controller if the pump is functional.",
        },
      ],
    },

    {
      id: 'pumpIsOff',
      details: 'Pump is off',
      feedback: '',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
      subOptions: [
        {
          id: 'pumpOffVADReplace',
          details: 'Pump is off: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "CRITICAL FAIL: You incorrectly decided that the pump was off. It is important to thoroughly check all available information before coming to a decision about pump status. Additionally, if the pump truly was off, you need to replace the controller immediately.",
        },
        {
          id: 'pumpOffYouReplace',
          details: 'Pump is off: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
          reportFeedback: "CRITICAL FAIL: You incorrectly decided that the pump was off. It is important to thoroughly check all available information before coming to a decision about pump status. However, if the pump was truly off, you correctly determined that you need to replace the controller immediately.",        },
      ],
    },
  ],

  vitals: [
    {
      id: 'NIBPCuff',
      details: 'NIBP cuff',
      feedback: 'You are unable to obtain an accurate reading.',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 0.75,
      resolvesSimulation: false,
      reportFeedback: "Good job - it is best to attempt a blood pressure reading with an NIBP cuff first, and move to doppler if a reading cannot be obtained.",
    },
    {
      id: 'doppler',
      details: 'Doppler',
      feedback: 'Doppler shows a mean arterial pressure of 100 mmHg.',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
    },
    {
      details: 'Heart Rate',
      id: 'heartRate',
      feedback: 'There is no measurable heart rate',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    {
      id: 'temperature',
      details: 'Temperature',
      feedback: 'Patient temperature is 38.4 deg C.',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
    },
    {
      id: 'pulseOximeter',
      details: 'Pulse Oximeter',
      feedback: 'O2 error: no reading',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
    },
    {
      id: 'respirations',
      details: 'Respirations',
      feedback: 'Respiration rate is within normal range',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
    },
  ],

  lvadTeam: [
    {
      id: 'callLVADCoordinator',
      details: 'Call the LVAD Coordinator',
      feedback: 'VAD Team has been called',
      requiredToCheck: true,
      criticalFailure: false,
      pointValue: 1,
      resolvesSimulation: false,
      reportFeedback: "VAD coordinator team was called ASAP - this should always be the first step regardless of the case."
    },
  ],
};


