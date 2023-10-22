export default function (data, indicator) {
    return {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        width: "container",
        height: "container",
        title: `Industrial Overview `,
        data: {values: data},
        mark: "area",
        params: [
            {
                name: "Categories",
                select: {type: "point", fields: ["Category"]},
                bind: "legend",
            },
        ],
        encoding: {
            x: {
                field: "Year",
                axis: {tickSize: 0},
            },
            y: {
                aggregate: "sum",
                field: "Value",
                stack: "center",
                axis: null,
            },
            color: {
                field: "Category",
                scale: {scheme: "category20b"},
            },
            opacity: {
                condition: {param: "Categories", value: 1},
                value: 0.2,
            },
            tooltip: [{field: "Category", type: "nominal"}],
        },
    };
}
