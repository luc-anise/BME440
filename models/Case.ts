
interface Case {
    name: string;
    vitals: Vitals;
}

interface Vitals {
    bloodPressure: BloodPressure;
    doppler: string;
}

interface BloodPressure {
    NIBPcuff: string;
}