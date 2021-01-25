import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import LinkForm from "../LinkForms/LinkForm";
import { db } from "config/firebase";
import LinkList from "components/LinkList/LinkList";
import { doc } from "prettier";

const Links = () => {
  const [links, setlinks] = useState([]);

  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
  };

  const getLinks = async () => {
    await db.collection("links").onSnapshot((res) => {
      const docs = [];
      res.forEach((linkRes) => docs.push({ ...linkRes.data(), id: doc.id }));
      setlinks(docs);
    });
  };

  useEffect(() => {
    getLinks();
  });

  return (
    <>
      <Typography variant="h5" color="initial">
        Links
      </Typography>
      <LinkForm addOrEdit={addOrEditLink}></LinkForm>
      <LinkList links={links}></LinkList>
    </>
  );
};

export default Links;
