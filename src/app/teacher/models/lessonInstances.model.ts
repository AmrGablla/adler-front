export class LessonInstance {
  groupInstanceId: number
  groupInstance: {
    groupDefinitionId: number
    groupDefinition: string
    serial: string
    status: string
    students: []
    lessonInstances: []
    teacherAssignment: string
    id: number
    createdBy: Date
    createdDate: Date
    lastModifiedBy: Date
    lastModifiedDate: Date
  }
  lessonDefinitionId: number
  lessonDefinition: {
    sublevelId: number
    sublevel: string
    order: number
    id: number
    createdBy: Date
    createdDate: Date
    lastModifiedBy: Date
    lastModifiedDate: Date
  }
  materialDone: number
  materialToDo: number
  serial: string
  lessonInstanceStudents: [
    {
      lessonInstanceId: number
      studentId: string
      student: string
      attend: boolean
      homework: boolean
      id: number
      createdBy: Date
      createdDate: Date
      lastModifiedBy: Date
      lastModifiedDate: Date
    }
  ]
  id: number
  createdBy: Date
  createdDate: Date
  lastModifiedBy: Date
  lastModifiedDate: Date
  submittedReport :boolean
}
