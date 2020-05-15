import React from 'react';
import { Formik } from 'formik';
import { songValidationSchema } from './form-schemas'

const Form = ({ setlooksong }) => {
    return (
        <Formik
            initialValues={{ artista: '', canción: '' }}
            validationSchema={songValidationSchema}
            onSubmit={(values, { resetForm }) => {
                setlooksong(values);
                resetForm({
                    values: { artista: '', canción: '' }
                });
            }}
        >{formik => (
            <div className="bg-info">
                <div className="container">
                    <div className="row">
                        <form onSubmit={formik.handleSubmit}
                            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        >
                            <fieldset>
                                <legend className="text-center">Buscador Letras Canciones</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Artista</label>
                                            <input
                                                id="artista"
                                                className="form-control"
                                                {...formik.getFieldProps('artista')}
                                                placeholder="Nombre Artista"
                                            />
                                        </div>
                                        {formik.touched.artista && formik.errors.artista ? (
                                            <div className="alert alert-primary" role="alert">
                                                {formik.errors.artista}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Canción</label>
                                            <input
                                                id="canción"
                                                className="form-control"
                                                placeholder="Nombre Cancion"
                                                {...formik.getFieldProps('canción')}
                                            />
                                        </div>
                                        {formik.touched.canción && formik.errors.canción ? (
                                            <div className="alert alert-primary" role="alert">
                                                {formik.errors.canción}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right"
                                >Buscar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )}
        </Formik>
    );
};

export default Form;