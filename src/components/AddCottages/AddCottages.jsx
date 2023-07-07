import React, { Component } from "react";
import CottageInfos from "./CottageInfos";
import CottagePhotos from "./CottagePhotos";
import CottageName from "./CottageName";
import CottagePrice from "./CottagePrice";
import CottageSuccess from "./CottageSuccess";
import CottageConfirm from "./CottageConfirm";
import axios from "axios";
import { checkAuth } from "../auth";


export default class AddCottages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      id_cottages: "",
      step: 1,
      name: "",
      content: "",
      dayprice: "",
      caution: "",
      adress: "",
      city: "",
      cp: "",
      max_personnes: "",
      bed_count: "",
      room_count: "",
      has_wifi: false,
      has_parking: false,
      has_clim: false,
      has_pool: false,
      id_categories: "1",
      id_regions: "1",
      id_users: "",
      categories: [],
      regions: [],
      file: '',
    };
  }

  setAuth = (value) => {
    this.setState({ auth: value });
  };

  componentDidMount() {
    checkAuth(this.setAuth);
    this.fetchCategories();
    this.fetchUserId();
    this.fetchRegions();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.auth && !this.state.auth) {
      window.location.href = "/login";
    }
  }

  fetchRegions = () => {
    axios
      .get("http://localhost:3001/regions")
      .then((res) => {
        this.setState({ regions: res.data });
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des régions :", err);
      });
  };

  fetchCategories = () => {
    axios
      .get("http://localhost:3001/categories")
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des catégories :", err);
      });
  };

  fetchUserId = () => {
    axios
      .get("http://localhost:3001/users/")
      .then((res) => {
        this.setState({ id_users: res.data.id });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/cottages/cottage", this.state)
      .then((res) => {
        this.setState({id_cottages: res.data.id})
        this.setState({ step: 5 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handlePhoto = (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(this.state.id_cottages, this.state.file);
    formData.append('id_cottages', this.state.id_cottages);
    formData.append('photo', this.state.file);
    console.log(formData);
    console.log(this.state);
    axios
      .post("http://localhost:3001/pictures/", formData)
      .then(() => {
        this.setState({ step: 6 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleFile = (e) => {
    const file = e.target.files[0]
    this.setState({ file })
  }
  handleChange = (input) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [input]: value });
  };

  render() {
      const {
        id_cottages,
        step,
        categories,
        regions,
        name,
        content,
        dayprice,
        caution,
        adress,
        city,
        cp,
        max_personnes,
        bed_count,
        room_count,
        has_wifi,
        has_parking,
        has_clim,
        has_pool,
        id_regions,
        id_categories,
        id_users,
        file,
      } = this.state;

      const values = {
        id_cottages,
        name,
        content,
        dayprice,
        caution,
        adress,
        city,
        cp,
        max_personnes,
        bed_count,
        room_count,
        has_wifi,
        has_parking,
        has_clim,
        has_pool,
        id_regions,
        id_categories,
        id_users,
        file,
      };


      switch (step) {
        case 1:
          return (
            <CottageInfos
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              regions={regions}
            />
          );
        case 2:
          return (
            <CottageName
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              categories={categories}
            />
          );
        case 3:
          return (
            <CottagePrice
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 4:
          return (
            <CottageConfirm
              prevStep={this.prevStep}
              handleSubmit={this.handleSubmit}
              values={values}
            />
          );
        case 5:
          return (
            <CottagePhotos
              handleSubmit={this.handlePhoto}
              prevStep={this.prevStep}
              handleFile={this.handleFile}
              values={values}
            />
          );
        case 6:
          return <CottageSuccess />;
        default:
          break;
      }
  }
}