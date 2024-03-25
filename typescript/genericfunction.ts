function DisplayData<T>(id:T,name:string){
    console.log(`Id is:${id} and Name is:${name}`);
    console.log(`Datatype of Id is:${typeof(id)} and Datatype of Name is:${typeof(name)}`);
}
DisplayData<number>(101,"Nikitha");
DisplayData<string>("102","Nikki");