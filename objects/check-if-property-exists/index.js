var movie = {
    title: 'World war z',
    actor: 'Brad Pitt',
    movieExists: true
};


function checkProperty(propertyName) {

if (movie.hasProperty(propertyName) === true) {
    console.log('The objects has that property')
} else {
    console.log('The object does not have that property')
}
}

checkProperty('name');
checkProperty('title');
checkProperty('director'); 
checkProperty('actor');