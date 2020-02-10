const changeSex = sex => ({
  type: "CHANGE_SEX",
  sex
});

const editWeight = weight => ({
  type: "EDIT_WEIGHT",
  weight
});

export const userActionCreator = {
  changeSex,
  editWeight
};
