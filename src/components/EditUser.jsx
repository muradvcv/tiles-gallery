"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { CiEdit } from "react-icons/ci";

const EditUser = () => {

  const isValidUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleUser = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();

    // ❌ invalid image block
    if (photo && !isValidUrl(photo)) {
      alert("Valid image URL dao (http/https)");
      return;
    }

    await authClient.updateUser({
      name: name || "No Name",
      image: photo || "",
    });

    // modal close
    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="mt-10">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Edit Profile <CiEdit />
      </button>

      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">

          <h3 className="text-lg font-bold text-center mb-4">
            Edit Your Profile
          </h3>

          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleUser}
          >
            <input
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your Name"
            />

            <input
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter your photo url (https://...)"
            />

            <div className="flex gap-3 mt-4">
              <button className="btn btn-primary">Save</button>

              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_5").close()
                }
              >
                Cancel
              </button>
            </div>
          </form>

        </div>
      </dialog>
    </div>
  );
};

export default EditUser;