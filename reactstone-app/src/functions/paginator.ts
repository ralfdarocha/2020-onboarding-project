const pageSize:number = 20;

const paginator = (cards:any[], page: number = 1):any[] => cards.slice((page - 1) * pageSize, page * pageSize);

export { 
    paginator, 
    pageSize
};