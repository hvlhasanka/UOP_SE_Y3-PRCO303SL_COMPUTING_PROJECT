package computingprojecthvlhasanka.ghdserverapp.repository;

import computingprojecthvlhasanka.ghdserverapp.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Enabling CURD database operations for 'Login' relation using JpaRepository
@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {

}
