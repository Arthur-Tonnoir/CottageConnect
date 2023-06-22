export interface ICrud{

    findAll()

    findById(id: string)

    create(entite: string)

    update(entite: string)

    delete(id: string)

}