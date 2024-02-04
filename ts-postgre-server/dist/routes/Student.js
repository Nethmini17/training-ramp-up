"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Student_1 = require("../controllers/Student");
const createStudentValidation_1 = require("../middlewares/expressValidator/createStudentValidation");
const router = express_1.default.Router();
router.get('/', Student_1.getStudents);
router.post('/', createStudentValidation_1.createStudentValidation, Student_1.createStudent);
router.put('/:id', createStudentValidation_1.createStudentValidation, Student_1.updateStudent);
router.delete('/:id', Student_1.deleteStudent);
exports.default = router;
//# sourceMappingURL=Student.js.map