module.exports = ({
  name,
  registerNumber,
  id,
  dob,
  avatar,
  qrcode,
  address
}) => {
  return `
    <style>
    .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    }
    .title {
    color: grey;
    font-size: 18px;
    }

    button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    }

    a {
    text-decoration: none;
    font-size: 22px;
    color: black;
    }

    button:hover, a:hover {
    opacity: 0.7;
    }
    </style>
    <div class="card">
        <p><button>Medical Record Access Card</button></p>
        <img src=http://localhost:5000/${avatar} alt="${name}" style="width:50%">
        <h1>${name}</h1>
        <p class="title">${registerNumber}, ${dob}</p>
        <p>${address}</p>
        <p><button>${id}</button></p>
    </div>
    <div class="card">
        <p><button>Medical Record Access Card</button></p>
        <img src=http://localhost:5000/${qrcode} alt="${registerNumber}" style="width:50%">
        <p class="title">${id}</p>
        <p>This card gives access all your medical records. This card can be access by the doctors and hospitals.</p>
        <p><button>${registerNumber}</button></p>
    </div>
    `;
};
