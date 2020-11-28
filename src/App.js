import React, { useState } from "react";
import './App.scss';
import Header from "./components/Header";
import CreateListDialog from "./components/CreateListDialog";
import DeleteListDialog from "./components/DeleteListDialog";
import ListItem from "./components/ListItem";
import {
  Container, Collapse, Button, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, Col, Row
} from 'reactstrap';
import { dropDownItems, clothItems } from "./static/constants";
import { ReactComponent as AccordionIcon } from "./assets/Icons/left.svg";

const App = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogeOpen, setDeleteDialogeOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([...dropDownItems]);
  const [selectedValue, setSelectedValue] = useState("");
  const [clothItemsFirst, setClothItemsFirst] = useState([...clothItems]);
  const [clothItemsSecond, setClothItemsSecond] = useState([...clothItems]);
  const [clothItemsThird, setClothItemsThird] = useState([...clothItems]);
  const [accordionState, setAccordionState] = useState({
    clothes: false,
    toiletries: false,
    travelEssentials: false,
    others: false,
  });

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const accordionStateHandler = (value) => {
    setAccordionState({
      ...accordionState,
      [value]: !accordionState[value]
    })
  }

  const listCreateHandler = (value) => {
    let tempArr = [...dropdownItems];
    tempArr.push({ label: value });
    setDropdownItems([...tempArr]);
    setSelectedValue(value)
  }

  const listDeleteHandler = () => {
    let selectedItemIndex = dropdownItems.findIndex(x => x.label === selectedValue);
    let tempArr = [...dropdownItems];
    tempArr.splice(selectedItemIndex, 1);
    setDropdownItems([...tempArr]);
    setSelectedValue("")
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <section className="heading-section">
          <h1 className="main-heading mr-3">My packing lists</h1>
          <Container>
            <Row noGutters={true}>
              {/* <div className="d-flex align-items-center"> */}
              <Col lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                <Dropdown className="mb-3 mb-lg-0 mb-md-0" isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle color="primary" caret className="mr-3 list-dropdown">
                    <div>{selectedValue !== "" ? selectedValue : "Select packing list"}</div>
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      dropdownItems.map((item, index) => (
                        <DropdownItem
                          key={index}
                          name={item.label}
                          onClick={(e) => setSelectedValue(e.target.name)}
                        >
                          {item.label}
                        </DropdownItem>
                      ))
                    }
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                <Button
                  onClick={() => setCreateDialogOpen(true)}
                  color="danger"
                  className="tw-button mr-2"
                >
                  Create New
                </Button>
              </Col>
              <Col lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                <Button
                  onClick={() => setDeleteDialogeOpen(true)}
                  id="delete-btn"
                  type="button"
                  color="danger"
                  className="tw-button"
                >
                  Delete this packing list
                </Button>
              </Col>
              {/* </div> */}
            </Row>
          </Container>
        </section>
        <section className="accordion-section">
          <div className="accordion-container">
            <span
              className="acordion-heading"
              onClick={() => accordionStateHandler('clothes')}
            >
              Clothes
            </span>
            <AccordionIcon
              className={accordionState.clothes ? "icon-open" : "icon-close"}
              width='10'
              height='15'
            />
          </div>
          <Collapse isOpen={accordionState.clothes}>
            <Container fluid>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  {clothItemsFirst.map((item, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      title={item.label}
                      removeItem={(index) => {
                        let tempArr = [...clothItemsFirst];
                        tempArr.splice(index, 1);
                        setClothItemsFirst([...tempArr]);
                      }}
                    />
                  ))}
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {clothItemsSecond.map((item, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      title={item.label}
                      removeItem={(index) => {
                        let tempArr = [...clothItemsSecond];
                        tempArr.splice(index, 1);
                        setClothItemsSecond([...tempArr]);
                      }}
                    />
                  ))}
                </Col>
                <Col lg={4} md={6} sm={6}>
                  {clothItemsThird.map((item, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      title={item.label}
                      removeItem={(index) => {
                        let tempArr = [...clothItemsThird];
                        tempArr.splice(index, 1);
                        setClothItemsThird([...tempArr]);
                      }}
                    />
                  ))}
                </Col>
              </Row>
            </Container>
          </Collapse>

          <div className="accordion-container">
            <span
              className="acordion-heading"
              onClick={() => accordionStateHandler('toiletries')}
            >
              Toiletries/hygiene
            </span>
            <AccordionIcon
              className={accordionState.toiletries ? "icon-open" : "icon-close"}
              width='10'
              height='15'
            />
          </div>
          <Collapse isOpen={accordionState.toiletries}>
            <p>Toiletries/hygiene section goes here</p>
          </Collapse>

          <div className="accordion-container">
            <span
              className="acordion-heading"
              onClick={() => accordionStateHandler('travelEssentials')}
            >
              Travel essestials
            </span>
            <AccordionIcon
              className={accordionState.travelEssentials ? "icon-open" : "icon-close"}
              width='10'
              height='15'
            />
          </div>
          <Collapse isOpen={accordionState.travelEssentials}>
            <p>Travel essestials section goes here</p>
          </Collapse>

          <div className="accordion-container">
            <span
              className="acordion-heading"
              onClick={() => accordionStateHandler('others')}>Others</span>
            <AccordionIcon
              className={accordionState.others ? "icon-open" : "icon-close"}
              width='10'
              height='15'
            />
          </div>
          <Collapse isOpen={accordionState.others}>
            <p>Others section goes here</p>
          </Collapse>
        </section>
      </Container>
      <CreateListDialog
        isOpen={createDialogOpen}
        toggle={() => setCreateDialogOpen(prevState => !prevState)}
        listCreateHandler={listCreateHandler}
      />
      <DeleteListDialog
        id="delete-btn"
        isOpen={deleteDialogeOpen}
        toggle={() => setDeleteDialogeOpen(prevState => !prevState)}
        listDeleteHandler={listDeleteHandler}
      />
    </div>
  );
}

export default App;
