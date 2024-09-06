import mongoose from 'mongoose';
import { stringify } from 'postcss';

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
    
  },
  district: {
    type: String,
    
  },
  name: {
    type: String,
    required: true,
  },

  principalName: {
    type: String,
    required: true,
  },
  principalPhone: {
    type: String,
    required: true,
  },
  principalEmail: {
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
    type: String,
    unique: true,
    required: true,
  },
  tracksInterested: {
    type: [String],
    required: true,
  },
  howDidYouHearAboutUs: {
    type: {platform:String,text:String},
    required: true
  }
});


function maxParticipants(participants) {
  return participants.length <= 3;
}

export default mongoose.models.Registration || mongoose.model('Registration', registrationSchema);