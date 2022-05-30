

export default function TextField({ label, error,  ...otherProps} ) {
    return (
        <>
        <label htmlFor="email"> {label}</label>
        <input id='email' type="email" name="email" {...otherProps} />
        {!!error && <span style={{ color: 'red' }}>{error}</span>}
        </>
    );
}