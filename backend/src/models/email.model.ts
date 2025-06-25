export interface EmailPayload {
          to: string;      // Added recipient field
          subject: string;
          message: string;
}

export interface EmailPayload {
          to: string;
          subject: string;
          html: string;
          text?: string; // optional
}
        
export interface WelcomeEmailPayload {
          email: string;
          firstName: string;
          link: string;
}
        