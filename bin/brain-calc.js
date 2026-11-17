#!/usr/bin/env node

import { jugarPartida } from "../src/index.js";
import { generarRonda, instruccion } from "../src/games/calc.js";

jugarPartida(instruccion, generarRonda);