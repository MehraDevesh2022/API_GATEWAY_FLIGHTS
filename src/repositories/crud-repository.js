const { AppError } = require("../utils")
const { StatusCodes } = require("http-status-codes")
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const res = await this.model.create(data);
        return res;
    }


    async geData(id) {
        const res = await this.model.findByPk(id);

        if (!res) {
            throw new AppError(["Not able to found resource."], StatusCodes.BAD_REQUEST)
        }

        return res;
    }


    async destory(id) {
        const res = await this.model.destroy({
            where: {
                id: id,
            },
        });

        if (!res) {
            throw new AppError(["Not able to found resource."], StatusCodes.BAD_REQUEST)
        }


        return res;
    }

    async getAll() {
        const res = await this.model.findAll();
        return res;
    }

    async update(id, data) {
        const res = await this.model.update(
            { data },
            {
                where: {
                    id: id,
                },
            },
        );

        if (!res) {
            throw new AppError(["Not able to found resource."], StatusCodes.BAD_REQUEST)
        }

        return res;
    }
}


module.exports = CrudRepository;