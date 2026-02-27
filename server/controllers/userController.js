const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body || {};

    if (!name || !email || !password || !role) {
      return next(createHttpError(400, "All fields are required!"));
    }

    const isUserPresent = await User.findOne({ email }) || await User.findOne({ name });
    if (isUserPresent) {
      return next(createHttpError(400, "User already exists!"));
    }

    // Hashear la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario correctamente
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ success: true, message: "New user created!", data: newUser });
  } catch (e) {
    // Manejo de índice único (duplicado)
    if (e.code === 11000) {
      return next(createHttpError(409, "Email already registered"));
    }
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return next(createHttpError(400, "Email and password required"));

    const user = await User.findOne({ email });
    if (!user) return next(createHttpError(401, "Invalid credentials"));

    const match = await bcrypt.compare(password, user.password);
    if (!match) return next(createHttpError(401, "Invalid credentials"));

    // Aquí podrías generar un JWT; por ahora devuelvo un mensaje y userId
    res.json({ message: "User Logged In!", userId: user._id });
  } catch (e) {
    next(e);
  }
};

module.exports = { register, login };