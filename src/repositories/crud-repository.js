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
        return res;
    }


    async destory(id) {
        const res = await this.model.destroy({
            where: {
                id: id,
            },
        });


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

        return res;
    }
}


module.exports = CrudRepository;