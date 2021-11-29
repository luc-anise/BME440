export interface Case {
  name: string;
  details: string;
  givenInformation: string;
  vitals: CasePossibility[];
  controller: Controller;
  lvadTeam: LVADTeam;
  //Labs: Labs; -- Not using this yet
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
export interface CasePossibility {
  id: string;
  details: string;
  feedback: string;
  checkedByUser?: boolean;
  requiredToCheck: boolean;
  criticalFailure: boolean;
  resolvesSimulation: boolean;
}

export let Case1: Case = {
  name: 'Case 1',
  details: 'SYSTEM CONTROLLER FAULT ALARM',
  givenInformation:
    'Case History: LVAD patient DH (58YO male) was presented to the Emergency Department after he jumped in the pool to save his son who he thought was drowning',
  controller: {
    display: {
      parameters: {
        details: 'Parameters',
        id: 'parameters',
        feedback: 'Normal Operations',
        requiredToCheck: false,
        criticalFailure: false,
        resolvesSimulation: false,
      },
      arrowCheck: {
        id: 'arrowCheck',
        details: 'Arrow check',
        feedback: 'Arrows ON',
        requiredToCheck: false,
        criticalFailure: false,
        resolvesSimulation: false,
      },
    },
    listenForHum: {
      id: 'listenForHum',
      details: 'Listen for hum',
      feedback: 'There is an audible hum',
      requiredToCheck: false,
      criticalFailure: false,
      resolvesSimulation: false,
    },
    pump: {
      isOn: {
        haveLVADTeamReplaceController: {
          id: 'pumpOnVADReplace',
          details: 'Pump is on: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: false,
          resolvesSimulation: false,
        },
        replaceControllerYourself: {
          id: 'pumpOnYouReplace',
          details: 'Pump is on: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
        },
      },
      isOff: {
        haveLVADTeamReplaceController: {
          id: 'pumpOffVADReplace',
          details: 'Pump is off: Have VAD team replace controller',
          feedback: '',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
        },
        replaceControllerYourself: {
          id: 'pumpOffYouReplace',
          details: 'Pump is off: Replace controller yourself immediately',
          feedback: 'Dead',
          requiredToCheck: false,
          criticalFailure: true,
          resolvesSimulation: false,
        },
      },
    },
  },
  vitals: [
    {
      id: 'NIBPCuff',
      details: 'NIBP cuff',
      feedback: 'Bad reading',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
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
  lvadTeam: {
    callCoordinator: {
      id: 'callLVADCoordinator',
      details: 'Call the LVAD Coordinator',
      feedback: 'VAD Team has been called',
      requiredToCheck: true,
      criticalFailure: false,
      resolvesSimulation: false,
    },
  },
};

export let key: string[] = [
  'callLVADCoordinator',
  'parameters',
  'arrowCheck',
  'listenForHum',
  'pumpOnVADReplace',
  'NIBPCuff',
  'doppler',
  'heartRate',
  'temperature',
  'pulseOximeter',
  'respirations'
];
