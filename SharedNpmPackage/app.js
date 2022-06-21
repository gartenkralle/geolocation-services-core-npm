'use strict';

import fetch from "node-fetch";

export var getCollectionCore = async function (url, port, latMin, latMax, lonMin, lonMax, density) {
    var result = await restGet(`${url}:${port}/location/${latMin}/${latMax}/${lonMin}/${lonMax}/${density}`);
    var locationsTransferedArr = result.Nodes;

    return locationsTransferedArr;
};

export var getDetailsCore = async function (url, port, id) {
    var result = await restGet(`${url}:${port}/location/tags/${id}`);
    var tags = result.Tags;

    return tags;
};

async function restGet(url) {
    var response = await fetch(url);
    var result = await response.json();

    return result;
}
