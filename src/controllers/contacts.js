import createHttpError from 'http-errors';
import { getAllContacts, 
getContactsById,
 createContacts, 
 deleteContacts,
 updateContact } from '../services/contacts.js'
// eslint-disable-next-line no-unused-vars
export const getContactsAllController = async (req, res, next) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};
// eslint-disable-next-line no-unused-vars
 export const getContactsByIdController = async (req, res, next) => {
  const { contactsId } = req.params;
  try {
    const contact = await getContactsById(contactsId);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactsId}!`,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};
export const createContactsController = async (req, res, next) => {
  try {
    const contact = await createContacts(req.body);
    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};
export const patchContactController = async (req, res, next) => {
  const { contactsId } = req.params;
  try {
    const result = await updateContact(contactsId, req.body);
    if (!result) {
      throw createHttpError(404, 'Contact not found');
    }
    res.json({
      status: 200,
      message: 'Successfully patched a contact!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
  export const deleteContactsIdController = async (req, res, next) => {
    const { contactsId } = req.params;
  
    const contact = await deleteContacts(contactsId);
  
    if (!contact) {
      next(createHttpError(404, 'Student not found'));
      return;
    }
  
    res.status(204).send();
  };