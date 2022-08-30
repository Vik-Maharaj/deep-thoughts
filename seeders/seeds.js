const userSeeds = require('./userSeed.json');
const thoughtSeeds = require('./thoughtSeed.json');
const db = require('../config/connection');
const { Thought, User } = require('../models');