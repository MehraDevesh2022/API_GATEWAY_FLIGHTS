const {StatusCodes} = require("http-status-codes");
const { AppError} = require("../utils");


class CrudRepository {
    constructor(model){
     this.model = model;
    }

   
    async get(_id){
        const response  = await this.model.findByPk(_id);
        if(!response){
        throw new AppError([`record not found with id ${_id}`], StatusCodes.NOT_FOUND);
        }
        return response;
    }


    async getAll(){
        const response  = await this.model.findAll();
        return response;
    }

    async destory(_id){
        const response  = await this.model.destory({
            where : {
                id : _id
            }
        });
        if(!response){
            throw new AppError([`record not found with id ${_id}`], StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(_id , data){
         const response  = await this.model.update(data, {
            where : {
                id : _id
            }
        });
        if(!response){
        throw new AppError([`record not found with id ${_id}`], StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async create(data){
        const response  = await this.model.create(data);
        return response;
    }

}

module.exports  = CrudRepository;