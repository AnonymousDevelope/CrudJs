const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowseRouting = ReactRouterDOM.HashRouter;
var createPerson = [];
var clonecreateperson = [];
var indexTr = 0;
const App = () => (
  <BrowseRouting>
    <header className="contaienr-fluid">
      <div className="row">
        <div className="container">
          <div className="nav navbar navbar-dark navbar-expand-lg bg-dark navbar-light mw-100">
            <Link className="navbar-brand">
              <img src="src/logo/logo.png" />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Site_MAP" className="nav-link">
                  Site-MAP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <Route exact path="/Login" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Site_MAP" component={Site_MAP} />
    <Route path="/Login/CRUD" component={CRUD} />
    {/* <Route path="/Login/CRUD/Edit" component={Edit} /> */}
  </BrowseRouting>
);

const Home = () => (
  <main>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center py-5">
        <div class="col-md-6">
          <form class="form" autocomplete="on">
            <fieldset>
              <legend>Full Name</legend>
              <input type="text" name="" id="nameInput" class="form-control" />
            </fieldset>
            <fieldset>
              <legend>Family</legend>
              <input type="text" name="" id="family" class="form-control" />
            </fieldset>
            <fieldset>
              <legend>Phone:</legend>
              <input
                type="number"
                name=""
                id="numberPhone"
                class="form-control"
              />
            </fieldset>
            <Link
              onClick={Create}
              to="/Login/CRUD"
              className="btn btn-outline-primary my-3"
            >
              Send
            </Link>
          </form>
        </div>
      </div>
    </div>
  </main>
);
const About = () => <h1>Hello CRUD js</h1>;
const Site_MAP = () => <h1>Sultanov Khayotjon create crud 2021 year 18.07</h1>;
const CRUD = () => (
  <main className="container">
    <div className="row">
      <div className="col-md-6">
        <table className="table table-striped table-bordered">
          <thead>
            <div
              className="modal fade"
              id="exampleModalCenteredScrollable"
              tabindex="-1"
              aria-labelledby="exampleModalCenteredScrollableTitle"
              style={{ display: "none" }}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalCenteredScrollableTitle"
                    >
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      Fullname
                      <input
                        type="text"
                        className="form-control"
                        id="nameInputEdit"
                      />
                      Family
                      <input
                        type="text"
                        className="form-control"
                        id="familyEdit"
                      />
                      Number Phone
                      <input
                        type="text"
                        className="form-control"
                        id="numberPhoneEdit"
                      />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      id="updateCrud"
                      data-bs-dismiss="modal"
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <tr>
              <th>Full Name</th>
              <th>Family</th>
              <th>Number</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  </main>
);
class CreateTrTd extends React.Component {
  render() {
    return clonecreateperson.map((item, i) => {
      return React.createElement(
        "tr",
        {},
        item.map((item, i) => React.createElement("td", { key: i }, item)),
        <td className="p-0  text-center">
          <button
            className="btn btn-outline-secondary rounded-0"
            data-bs-target="#exampleModalCenteredScrollable"
            id="editCrud"
            data-bs-toggle="modal"
          >
            Edit
          </button>
        </td>,
        <td className="p-0 text-center">
          <button
            onClick={Delete}
            id="deleteCrud"
            className="btn btn-outline-danger rounded-0"
          >
            Delete
          </button>
        </td>
      );
    });
  }
}
const Create = () => {
  clonecreateperson.push([nameInput.value, family.value, numberPhone.value]);
  setTimeout(() => {
    ReactDOM.render(<CreateTrTd />, document.querySelector("tbody"));
  }, 0);
  setTimeout(() => {
    $("#root #editCrud").attr("onclick", "Edit(this)");
    $("#root #updateCrud").attr("onclick", "Update()");
  }, 0);
};

function Edit(td) {
  const tr = td.parentElement.parentElement;
  indexTr = $(tr).index();
  nameInputEdit.value = clonecreateperson[indexTr][0];
  familyEdit.value = clonecreateperson[indexTr][1];
  numberPhoneEdit.value = clonecreateperson[indexTr][2];
}
function Update() {
  clonecreateperson[indexTr][0] = nameInputEdit.value;
  clonecreateperson[indexTr][1] = familyEdit.value;
  clonecreateperson[indexTr][2] = numberPhoneEdit.value;
  setTimeout(() => {
    var tr = document.getElementById("tbody").getElementsByTagName("tr")[
      indexTr
    ];
    tr.getElementsByTagName("td")[0].innerHTML = clonecreateperson[indexTr][0];
    tr.getElementsByTagName("td")[1].innerHTML = clonecreateperson[indexTr][1];
    tr.getElementsByTagName("td")[2].innerHTML = clonecreateperson[indexTr][2];
  }, 0);
  $(".modal").removeClass("show");
}
const Delete = () => {
  var tr = document.getElementById("tbody").getElementsByTagName("tr")[indexTr];
  $(tr).remove();
  clonecreateperson.splice(indexTr, 1);
};

ReactDOM.render(<App />, document.querySelector("#root"));
