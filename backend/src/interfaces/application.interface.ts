export interface IApplication {
  fullName: string;
  gender: "Male" | "Female";
  dob: Date;
  phoneNumber: string;
  email: string;
  whatsappNumber?: string;
  address: string;
  education: string;

  businessName: string;
  yearStarted: number;
  registrationStatus: "Registered" | "Not Yet Registered";
  rcNumber?: string;
  businessAddress: string;
  stateOfOperation: "Abia" | "Anambra" | "Ebonyi" | "Enugu" | "Imo";
  businessSector: string;
  businessDescription: string;
  customerTypes: string[];

  digitalToolsUsed: string[];
  sellsOnline: boolean;
  digitalChallenges: string[];
  toolsToLearn: string;

  motivation: string;
  successLookLike: string;
  available8Weeks: boolean;
  availableBootcamp: boolean;

  isPrimaryIncomeEarner?: boolean;
  hasDisability?: boolean;
  womenOrYouthLed?: boolean;

  cacCertificate?: string;
  businessPhoto?: string;

  declarationAgreed: boolean;
  releaseConsentAgreed: boolean;
}
