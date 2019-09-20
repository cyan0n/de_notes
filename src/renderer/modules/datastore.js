import Datastore from 'nedb';
import path from 'path';

export default new Datastore({
    autoload: true,
    filename: path.join(__static, 'data.db')
})