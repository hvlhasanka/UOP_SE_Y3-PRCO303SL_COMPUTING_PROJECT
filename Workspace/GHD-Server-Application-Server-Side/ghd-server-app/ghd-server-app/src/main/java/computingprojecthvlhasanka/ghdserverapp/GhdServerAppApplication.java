package computingprojecthvlhasanka.ghdserverapp;

import computingprojecthvlhasanka.ghdserverapp.repository.AccountRepository;
import computingprojecthvlhasanka.ghdserverapp.repository.NamePrefixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GhdServerAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhdServerAppApplication.class, args);
	}

}
