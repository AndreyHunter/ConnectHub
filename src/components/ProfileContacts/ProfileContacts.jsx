import styles from './ProfileContacts.module.scss';

const ProfileContacts = ({ contacts }) => {
    return (
        <section className={styles.contacts}>
            <div className={styles.title}>Contacts</div>
            <ul className={styles.list}>
                {contacts.phone && <li>Phone: {contacts.phone}</li>}
                {contacts.email && <li>Email: {contacts.email}</li>}
                {contacts.youtube && <li>Youtube: {contacts.youtube}</li>}
            </ul>
        </section>
    );
};

export default ProfileContacts;
