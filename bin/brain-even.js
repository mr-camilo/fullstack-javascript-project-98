#!/usr/bin/env node

import { generarRonda, instruccion } from "../src/games/even.js";
import { jugarPartida } from "../src/index.js";

jugarPartida(instruccion, generarRonda);
