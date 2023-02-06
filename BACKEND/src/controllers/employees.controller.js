const employeesController = {};

const Employee = require('../models/employees.model')

employeesController.getEmployees = async (req, res) => {
  const allEmployees = await Employee.find()
  res.json(allEmployees)
};

employeesController.getEmployee = async (req, res) => {
    const oneEmployee = await Employee.findById(req.params.id)
    res.json(oneEmployee);
};

employeesController.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body)
  await newEmployee.save()
  res.json({ status: 'Employee Created Successfully' })
};

employeesController.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json({ status: 'Employee Updated Successfully'})

};

employeesController.deleteEmployee = async (req, res) => {
  const delEmployee = await Employee.findByIdAndDelete(req.params.id)
  res.json({ status: 'Employee Deleted Successfully' })
};

module.exports = employeesController;
