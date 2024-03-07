/* eslint-disable testing-library/no-unnecessary-act */
import React, { useEffect } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import useFetch from "./useFetch";

global.fetch = jest.fn();

const TestComponent = () => {
    const { data, isLoading, error, call } = useFetch();

    useEffect(() => {
        call('url');
    }, []);

    let displayData = "";
    if (data) {
        const { "post code": postCode, country } = data;
        displayData = `Country: ${country}, Post Code: ${postCode}`;
    }

    return (
        <div id="idData">{isLoading ? "Loading..." : error ? error.message : displayData}</div>
    );
};


let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("fetch status 200", async () => {
    global.fetch.mockImplementation(() =>
        Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({
                "post code": "50015",
                "country": "Spain",
                "country abbreviation": "ES",
                "places": [
                    {
                        "place name": "Zaragoza",
                        "longitude": "-0.8737",
                        "state": "Aragon",
                        "state abbreviation": "AR",
                        "latitude": "41.668"
                    }
                ]
            })
        })
    );

    await act(async () => {
        render(<TestComponent />, container);
    });

    const data = container.querySelector("#idData").textContent;
    expect(data).toBe("Country: Spain, Post Code: 50015");
});

it("fetch status undefined", async () => {
    global.fetch.mockImplementation(() =>
        Promise.resolve({
            ok: false,
            json: () => Promise.resolve({
            })
        })
    );

    await act(async () => {
        render(<TestComponent />, container);
    });

    const data = container.querySelector("#idData").textContent;
    expect(data).toBe("HTTP error! Status: undefined");
});

it("fetch status 404", async () => {
    global.fetch.mockImplementation(() =>
        Promise.resolve({
            ok: false,
            status: 404,
            json: () => Promise.resolve({
            })
        })
    );

    await act(async () => {
        render(<TestComponent />, container);
    });

    const data = container.querySelector("#idData").textContent;
    expect(data).toBe("Not Found");
});