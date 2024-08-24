import mongoose from 'mongoose';

const { Schema } = mongoose;

const participantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const mentorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const schoolDetailsSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const registrationSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  team: {
    type: [participantSchema],
    validate: [maxParticipants, 'A team must have exactly 3 participants'],
  },
  schoolDetails: {
    type: schoolDetailsSchema,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  dateRegistered: {
    type: String,
    required: true,
  },
  mentor: {
    type: mentorSchema, 
    required: true,
  },
  registrationNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
});

function maxParticipants(participants) {
  return participants.length === 3;
}

export default mongoose.models.Registration || mongoose.model('Registration', registrationSchema);