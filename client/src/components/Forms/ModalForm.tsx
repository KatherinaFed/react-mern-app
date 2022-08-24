import { useFormik } from 'formik';
import React, { useState } from 'react';
import Select from 'react-select';
import { activityOptions, locationOptions } from '../../helpers/filterList';
import { useAppDispatch } from '../../hooks/hook';
import { createEventThunk } from '../../store/events/eventThunk';
import BasicDatePicker from '../DatePickers/DatePicker';
import BasicTimePicker from '../DatePickers/TimePicker';
import {
  ButtonModalCancel,
  ButtonModalSave,
  Footer,
  InputActivity,
  InputDate,
  InputImage,
  InputLocation,
  InputTime,
  InputTitle,
  ModalFormContainer,
  TextAreaDescription,
} from './styles';

type OptionType = {
  label: string;
  value: string;
};

interface ValueI {
  activity: OptionType | null;
  title: string;
  description: string;
  date: number | null;
  time: number | null;
  location: OptionType | null;
  creator: string;
  img: string | null;
}

type PropsT = {
  closeWindow: () => void;
};

const ModalForm = ({ closeWindow }: PropsT) => {
  const [selectedActivity, setSelectedActivity] = useState<OptionType>({
    label: '',
    value: '',
  });
  const [selectedLocation, setSelectedLocation] = useState<OptionType>({
    label: '',
    value: '',
  });
  const [valueData, setValueData] = React.useState<Date | null>(null);
  const [valueTime, setValueTime] = React.useState<Date | null>(null);
  const [image, setImage] = useState<string>('');

  const handleUpload = (e: any) => {
    setImage(e.target.files[0]);
  };

  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      activity: null,
      title: '',
      description: '',
      date: null,
      time: null,
      location: null,
      creator: '',
      img: '',
    } as ValueI,
    onSubmit: (value: ValueI, { resetForm }) => {
      const timestampData = valueData && Math.round(valueData.getTime() / 1000);
      const timestampTime = valueTime && Math.round(valueTime.getTime() / 1000);

      dispatch(
        createEventThunk({
          ...value,
          date: timestampData,
          time: timestampTime,
          activity: selectedActivity,
          location: selectedLocation,
          img: image,
        })
      );

      resetForm();
    },
  });

  return (
    <ModalFormContainer onSubmit={handleSubmit}>
      <InputActivity>
        <div className="text">Activity</div>
        <div className="filter-activity">
          <Select
            onChange={(option: any | null) => setSelectedActivity(option)}
            options={activityOptions}
          />
        </div>
      </InputActivity>
      <InputTitle>
        <div className="text">Title</div>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
        />
      </InputTitle>
      <TextAreaDescription>
        <div className="text">Description</div>
        <textarea
          placeholder="Description of event"
          name="description"
          id="description"
          rows={2}
          value={values.description}
          onChange={handleChange}
        />
      </TextAreaDescription>
      <InputDate>
        <div className="text">Date</div>
        <BasicDatePicker value={valueData} setValue={setValueData} />
      </InputDate>
      <InputTime>
        <div className="text">Time</div>
        <BasicTimePicker value={valueTime} setValue={setValueTime} />
      </InputTime>
      <InputLocation>
        <div className="text">Location</div>
        <div className="filter">
          <Select
            onChange={(option: any | null) => setSelectedLocation(option)}
            options={locationOptions}
          />
        </div>
      </InputLocation>
      <InputImage>
        <div className="text">Choose a picture</div>
        <div className="image-wrapper">
          <input
            name="image"
            type="file"
            // accept="image/*"
            onChange={handleUpload}
          />
        </div>
      </InputImage>
      <Footer>
        <ButtonModalCancel onClick={closeWindow}>Cancel</ButtonModalCancel>
        <ButtonModalSave type="submit">Save</ButtonModalSave>
      </Footer>
    </ModalFormContainer>
  );
};

export default ModalForm;
