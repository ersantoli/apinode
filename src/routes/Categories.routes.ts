import { Router } from "express";


import { categoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const CategoriesRepository = new categoriesRepository();



categoriesRoutes.post("/", (request, response) => {

    const {name, description} = request.body;

   
CategoriesRepository.create({ name, description});

    return response.status(201).send();
});


export { categoriesRoutes };