package demo;

// From frontend to backend
public class AuthDTO {
    public final String username;
    public final String password;

    public AuthDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
