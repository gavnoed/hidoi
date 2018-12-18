import '@babel/core';
import express from 'express';
import http from 'http';
import Vue from 'vue';
import 'dotenv/config';

const app = express();

app.get("/", (req, res) => {
	res.end("test");
});

app.listen(3000);