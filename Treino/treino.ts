class Task  {
    descricao: string;
    id:number;
    complete: boolean;

    constructor(descricao: string, id:number, complete: boolean){
        this.descricao = descricao;
        this.id = id;
        this.complete = false;
    }

    markAsCompleted(): void{
        this.complete = true;
    }
}





