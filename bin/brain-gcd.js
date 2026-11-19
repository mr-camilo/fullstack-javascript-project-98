#!/usr/bin/env node

import { jugarPartida } from "../src/index.js";
import { instruccion, generarRonda } from "../src/games/gcd.js";

jugarPartida(instruccion, generarRonda);