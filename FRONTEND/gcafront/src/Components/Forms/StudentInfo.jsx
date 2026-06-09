function StudentInfo({
  firstname,
  lastname,
  midname,
  stdage,
  stdgender,
  stdnationality,
  stdreligion,
  stdplacebirth,
  stddatebirth,
  stdaddress,
  stdbarangay,
  stdcity,
  stdprovince,
  stdzipcode,
  motfirstname,
  motlastname,
  motmidname,
  motcontact,
  motemail,
  motoccupation,
  fatfirstname,
  fatlastname,
  fatmidname,
  fatcontact,
  fatemail,
  fatoccupation,
  guafirstname,
  gualastname,
  guamidname,
  guacontact,
  guaemail,
  guarelation,
}) {
  const fname = firstname;
  const lname = lastname;
  const mname = midname;
  const age = stdage;
  const gender = stdgender;
  const nationality = stdnationality;
  const religion = stdreligion;
  const placebirth = stdplacebirth;
  const datebirth = stddatebirth;
  const address = stdaddress;
  const barangay = stdbarangay;
  const city = stdcity;
  const province = stdprovince;
  const zipcode = stdzipcode;

  const mfname = motfirstname;
  const mlname = motlastname;
  const mmname = motmidname;
  const mcontact = motcontact;
  const memail = motemail;
  const moccupation = motoccupation;

  const ffname = fatfirstname;
  const flname = fatlastname;
  const fmname = fatmidname;
  const fcontact = fatcontact;
  const femail = fatemail;
  const foccupation = fatoccupation;

  const gfname = guafirstname;
  const glname = gualastname;
  const gmname = guamidname;
  const gcontact = guacontact;
  const gemail = guaemail;
  const grelation = guarelation;

  return (
    <div className="h-200 font-[Poppins]">
      <div className="flex h-full flex-col gap-y-5 overflow-x-hidden overflow-y-auto">
        {/** Student */}
        <span>Student Information</span>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">First Name</span>
            <br />
            <span>{fname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Last Name</span>
            <br />
            <span>{lname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Middle Name</span>
            <br />
            <span>{mname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Gender</span>
            <br />
            <span>{gender}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Religion</span>
            <br />
            <span>{religion}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Nationality</span>
            <br />
            <span>{nationality}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Place of Birth</span>
            <br />
            <span>{placebirth}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Date of Birth</span>
            <br />
            <span>{datebirth}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">
              Blk Lot / Street / Bldg. / House No. / Subdivision
            </span>
            <br />
            <span>{address}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Barangay</span>
            <br />
            <span>{barangay}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">City</span>
            <br />
            <span>{city}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Province</span>
            <br />
            <span>{province}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Zip Code</span>
            <br />
            <span>{zipcode}</span>
          </span>
        </div>
        {/** Mother */}
        <span>Mother's Information</span>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">First Name</span>
            <br />
            <span>{mfname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Last Name</span>
            <br />
            <span>{mlname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Middle Name</span>
            <br />
            <span>{mmname}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Contact No.</span>
            <br />
            <span>{mcontact}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Email</span>
            <br />
            <span>{memail}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Occupation</span>
            <br />
            <span>{moccupation}</span>
          </span>
        </div>
        {/** Father */}
        <span>Father's Information</span>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">First Name</span>
            <br />
            <span>{ffname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Last Name</span>
            <br />
            <span>{flname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Middle Name</span>
            <br />
            <span>{fmname}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Contact No.</span>
            <br />
            <span>{fcontact}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Email</span>
            <br />
            <span>{femail}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Occupation</span>
            <br />
            <span>{foccupation}</span>
          </span>
        </div>
        {/** Guardian */}
        <span>Guardian's Information</span>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">First Name</span>
            <br />
            <span>{gfname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Last Name</span>
            <br />
            <span>{glname}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Middle Name</span>
            <br />
            <span>{gmname}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Contact No.</span>
            <br />
            <span>{gcontact}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Email</span>
            <br />
            <span>{gemail}</span>
          </span>
          <span className="justify-center text-sm">
            <span className="text-xs text-neutral-800/60">Relation</span>
            <br />
            <span>{grelation}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
