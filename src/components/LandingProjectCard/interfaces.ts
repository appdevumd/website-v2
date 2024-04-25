export interface LandingProject {
  _id: string;
  name: string;
  organization: string;
  description: string;
  members: Member[];
  cover: string; /* Cover Image URL */
}

export interface Member {
  memberInfo: {
    firstName: string;
    lastName: string;
    profileUrl: string;
  }
  role: string;
}
