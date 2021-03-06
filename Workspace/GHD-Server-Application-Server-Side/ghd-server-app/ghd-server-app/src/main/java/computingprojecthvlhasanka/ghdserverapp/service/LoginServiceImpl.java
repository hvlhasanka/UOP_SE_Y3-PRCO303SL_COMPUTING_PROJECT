package computingprojecthvlhasanka.ghdserverapp.service;

import computingprojecthvlhasanka.ghdserverapp.model.Login;
import computingprojecthvlhasanka.ghdserverapp.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

}
