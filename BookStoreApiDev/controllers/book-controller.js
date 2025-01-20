import Book from "../models/book.js";

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({}); // gives all the books
    if (allBooks?.length > 0) {
      res.status(201).json({
        success: true,
        message: "List of books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in collections",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const getSingleBookbyId = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);
    if (!bookDetailsByID) {

      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! please try with another ID",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (error) {
    console.log("error", error);
    res.status(501).json({
      success: false,
      message: "some thing went wrong",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getcurrentBookID = req.params.id;
    
    const updatedBook = await Book.findByIdAndUpdate(
      getcurrentBookID,
      updatedBookFormData,
      { new: true, // it will give updatedbook back

      }
    );
    if(!updatedBook)  {
        res.status(404).json({
            success: false,
            message: "Book is not found with this ID",
        })
    } else {
        res.status(200).json({
            success: true,
            message: 'Book updated',
            data: updatedBook,
        })
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
      });
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export default {
  getAllBooks,
  getSingleBookbyId,
  updateBook,
  addNewBook,
  deleteBook,
};
