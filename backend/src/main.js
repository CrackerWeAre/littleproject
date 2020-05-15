/* eslint-disable import/first */
require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import cors from '@koa/cors';
import api from './api';

const { PORT, MONGO_URI } = process.env


mongoose.connect(
    'mongodb://admin:pwdtlchd50wh@49.247.134.77:27017/meerkatonair?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {useNewUrlParser: true, useFindAndModify: false}).then(() =>{
        console.log('Connected to MongoDB');
        }).catch(e =>{
            console.log(e)
        });
        

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());


const port = PORT || 4000;

app.listen(port, () => {
    console.log('Listening to port %d', port);
})