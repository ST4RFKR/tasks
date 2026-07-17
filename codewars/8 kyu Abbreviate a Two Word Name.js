function abbrevName(name){
    return name.split(' ').map(el => el[0]).join('.').toUpperCase()
}