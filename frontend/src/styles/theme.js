const theme = {
    spacing: {
        xs: 20,
    },
    colors: {
        fail: '#F00',
        pass: '#008000',
        skipped: '#CCC',
        siiliOrange: '#FF5200',
    },
    flexItem: {
        flexBasis: '30%',
        boxShadow: '0 3px 4px rgba(0,0,0,0.16), 0 3px 4px rgba(0,0,0,0.23)',
        margin: '10px',
        padding: '10px',
        minHeight: '20vh',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        fontSize: '12px',
    },
    baseTableStyle: `
      fontSize: 12px;
      table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
      }
      table,
      th,
      td {
        border-collapse: collapse;
        padding: 10px 10px;
        border: 1px solid black;
        text-align: left;
        vertical-align: middle;
        word-wrap: break-word;
      }
      .centerTableCellContent {
        text-align: center;
        vertical-align: middle;
      }
      .test-time-row {
        text-align: center;
      }
      table,
      th,
      td {
        padding: 10px;
        border: 1px solid black;
        text-align: left;
        vertical-align: middle;
      }
      td:first-of-type {
          vertical-align: top;
      }
      th {
        background: #ddd;
      }
      td {
        background: #ffffff;
      }

      td.test-result-undefined {
        background: #eee;
      }
      .centerTableCellContent {
        text-align: center;
        vertical-align: middle;
      }
    `,

    testTheme: {
        siiliOrange: '#FF5200',
        linkColor: '#003399',
        activeLinkColor: '#001155',
        container: `
          background-color: #e9e8e8;
          color: #222;
          border: 1px solid #ccc;
          p { line-height: 1.6 }

          nav {
            border-right: 1px solid darkgrey;
            background: #ddd;
            padding: 0;
          }
      `,
    },
};

export default theme;
