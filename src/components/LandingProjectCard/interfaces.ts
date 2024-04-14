export interface LandingProject {
  _id: string,
  name: string,
  organization: string,
  description: string,
  members: string[], /* Array of MongoDB User IDs */
  cover: string, /* Cover Image URL */
}
